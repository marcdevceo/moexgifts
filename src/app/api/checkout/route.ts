import { stripe } from "@/src/lib/stripe";
import { CartItem } from "@/ui-framework"; // If needed for typing

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items: CartItem[] = body.items;
    if (process.env.NODE_ENV !== "production") {
      console.log("Cart Items:", items);
    }

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Stripe Checkout Error:", message);
    return new Response("Checkout failed", { status: 500 });
  }
}
