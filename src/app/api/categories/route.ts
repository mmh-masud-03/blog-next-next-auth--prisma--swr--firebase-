import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

export const GET = async () => {
  try {
    const categories = prisma.category.findMany();
    JSON.stringify({ categories, status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};
