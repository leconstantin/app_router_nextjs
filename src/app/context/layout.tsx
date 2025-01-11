import React from "react";
import ContextClickCounter from "./context-click-counter";
import { getCategories } from "@/api/categories/getCategories";
import { Boundary } from "@/ui/boundary";
import { CounterProvider } from "./counter-context";
import { TabGroup } from "@/ui/tab/tab-group";

const title = "Client Context";

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <Boundary
      labels={["Server Component Boundary"]}
      size="small"
      animateRerendering={false}
    >
      <Boundary
        labels={["Counter Context Provider [Client Component]"]}
        color="blue"
        size="small"
        animateRerendering={false}
      >
        <CounterProvider>
          <Boundary
            labels={["Server Component Boundary"]}
            size="small"
            animateRerendering={false}
          >
            <div className="space-y-9">
              <div className="flex justify-between">
                <TabGroup
                  path="/context"
                  items={[
                    {
                      text: "Home",
                    },
                    ...categories.map((x) => ({
                      text: x.name,
                      slug: x.slug,
                    })),
                  ]}
                />
              </div>

              <ContextClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary>
    </Boundary>
  );
}
