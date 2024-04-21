"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
interface Page {
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
}
const Pagination = (props: Page) => {
  const { page, hasNext, hasPrev } = props;
  const router = useRouter();
  return (
    <div className="flex flext-row justify-between items-center mt-7 mr-20">
      <button
        className="bg-red-400 px-3 py-2 rounded-lg"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page}-1`)}
      >
        Previous
      </button>
      <button
        className="bg-red-400 px-3 py-2 rounded-lg"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
