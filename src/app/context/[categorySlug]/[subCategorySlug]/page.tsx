import { getCategory } from "@/api/categories/getCategories";
import { Counter } from "../../context-click-counter";
import { Boundary } from "@/ui/boundary";

export default async function Page(props: {
  params: Promise<{ categorySlug: string; subCategorySlug: string }>;
}) {
  const params = await props.params;
  const category = await getCategory({ slug: params.subCategorySlug });

  return (
    <Boundary labels={["Page [Server Component]"]} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-400/80">
          {category.name}
        </h1>

        <Counter />
      </div>
    </Boundary>
  );
}