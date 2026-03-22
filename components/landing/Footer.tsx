import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "../ui/text";

const footerSections = [
    {
        title: "Quick Links",
        links: [
            { name: "Support", href: "#" },
            { name: "FAQ", href: "#" },
            { name: "Terms of Service", href: "#" },
        ],
    },
    {
        title: "Navigation",
        links: [
            { name: "Our Fleet", href: "#" },
            { name: "vetted Stays", href: "#" },
            { name: "Become Partner", href: "#" },
        ],
    },
    {
        title: "Get in Touch",
        links: [{ icon: Mail, name: "support@rnr.ng", href: "mailto:support@rnr.ng" }],
    },
];

export default function Footer() {
    return (
        <footer className="bg-accent-foreground pt-20 pb-7 text-primary-foreground/80">
            <div className="container grid gap-12 md:grid-cols-footer">
                <div className="flex my-9 justify-between px-26 items-start gap-12 md:gap-20">
                    {/* Brand & Social */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 items-center justify-center rounded-lg bg-primary p-3">
                                <Text className="font-logo font-logo-variable rotate-45 text-2xl text-background">
                                    R
                                </Text>
                            </div>
                            <Text className="font-logo font-logo-variable text-3xl font-black text-primary-foreground">
                                RideAndRest
                            </Text>
                        </div>
                        {/* <p className="max-w-md text-sm">
                            Bringing executive convenience to the Nigerian traveler through trusted
                            rides and curated hotel stays, all in one seamless companion.
                        </p> */}
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-30 md:grid-cols-3">
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-xl font-bold uppercase tracking-wider text-primary-foreground">
                                    {section.title}
                                </h4>
                                <nav className="mt-6 font-light flex flex-col gap-4 text-sm">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="hover:text-primary-foreground"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}

                <div className="flex mt-14 justify-around items-end gap-12 md:gap-20">
                    <div className="w-sm">
                        <p className="my-6 font-light">Questions or updates? Follow us on social media! Contact us!</p>
                        <div  className="flex gap-6">
                            <Link href="#" className="hover:text-primary-foreground">
                                <Facebook className="h-16 w-16" />
                            </Link>
                            <Link href="#" className="hover:text-primary-foreground">
                                <Twitter className="h-16 w-16" />
                            </Link>
                            <Link href="#" className="hover:text-primary-foreground">
                                <Instagram className="h-16 w-16" />
                            </Link>
                            <Link href="#" className="hover:text-primary-foreground">
                                <Linkedin className="h-16 w-16" />
                            </Link>

                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-3xl font-bold uppercase tracking-wider text-primary-foreground">
                            Our Newsletters
                        </h4>
                        <p className="text-sm font-light">
                            Sign up for the latest updates on new services, vetted hotels, and trip
                            tips.
                        </p>
                        <form className="flex w-full max-w-md items-center justify-between rounded-4xl bg-primary p-3">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 font-light bg-primary border-none px-3 py-2 text-primary-foreground placeholder:text-primary-foreground focus:outline-none"
                            />
                            <Button
                                variant={"default"}
                                type="submit"
                                className="ml-2 font-light bg-gray-900 rounded-xl px-5 py-2 text-white hover:cursor-pointer"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-16 border-t border-primary-foreground/10 pt-4 text-xs">
                <p>&copy; 2024 RideAndRest Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}