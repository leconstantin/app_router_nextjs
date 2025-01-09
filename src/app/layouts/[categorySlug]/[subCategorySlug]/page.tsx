import { getCategory } from "@/api/categories/getCategories";
import { SkeletonCard } from "@/ui/skeleton-card";

export default async function Page(props: {
  params: Promise<{ subCategorySlug: string }>;
}) {
  const params = await props.params;
  const subCategory = await getCategory({ slug: params.subCategorySlug });

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        {subCategory.name}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: subCategory.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
