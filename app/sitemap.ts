import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/about-me",
        "/projects",
        "/blog",
        "/contact",
        "/experience",
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes];
}
