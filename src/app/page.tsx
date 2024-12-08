import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed quality",
    icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },

  {
    name: "For the Planet",
    icon: Leaf,
    description:
      "We've plegded 1% of sales to the preservation and restoration of the natural environment.",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
          <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl ">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Hippokart. Every asset on our platform is verified by our
            team to ensure our highest quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="./products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promised &rarr;</Button>
          </div>
        </div>

        {/* TO DO: List prodcuts  */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper>
          <div className="grid grid-col-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-col-3 lg:gap-y-0 ">
            {perks.map((perk) => (
              <div key={perk.name}></div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
