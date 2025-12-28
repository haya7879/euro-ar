import SearchGrid from "./search-grid";
import CoursesList from "@/components/shared/courses-list";
import { formatDate } from "./utils/search-utils";

interface SearchResultsProps {
  results: SearchTiming[] | SearchCourse[];
  resultType: "timings" | "courses";
}

export default function SearchResults({
  results,
  resultType,
}: SearchResultsProps) {
  if (results.length === 0) {
    return <NoResultsFound />;
  }

  if (resultType === "timings") {
    return (
      <SearchGrid
        items={results as SearchTiming[]}
        formatDate={formatDate}
      />
    );
  }

  return <CoursesList filteredCourses={results as SearchCourse[]} />;
}

function NoResultsFound() {
  return (
    <div className="text-center">
      <div className="text-gray-400 text-6xl mb-6">🔍</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        لا يوجد نتائج 
      </h3>
      <p className="text-gray-500 mb-6">
        لم نتمكن من العثور على أي دورات تدريبية   .
      </p>
    </div>
  );
}
