import { bgColorClass } from "@/ui-framework"

type FeaturedListProps = {
    label: string,
    title: string,
    image: string,
    url: string,
    bgColor: keyof typeof bgColorClass,
}

export const featuredList: FeaturedListProps[] = [
    {
        label: "For Him",
        title: "Grill with Love",
        image: "/grillmaster-set.jpg",
        url: "/products/prod_SUusCYyYYQBNnb",
        bgColor: "blue"
    },
    {
        label: "For Her",
        title: "Sparkle & Scent",
        image: "/firecracker-candles.png",
        url: "/products/prod_SUo7l1yO4OqkkO",
        bgColor: "white"
    },
    {
        label: "For Family",
        title: "Create Core Memories",
        image: "/4th-party-set.png",
        url: "/products/prod_SUv5ZmiY7EntVx",
        bgColor: "red"
    },
]