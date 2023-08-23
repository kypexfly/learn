import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { env } from "@/config/env";

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient(
    { cookies },
    {
      supabaseUrl: env.SUPABASE_URL,
      supabaseKey: env.SUPABASE_ANON_KEY,
    }
  );

  const formData = await req.formData();
  const image = formData.get("file") as File;

  console.log(image);

  try {
    const { data, error } = await supabase.storage
      .from("test_uploads")
      .upload(`public/${image.name}.png`, image, {
        cacheControl: "3600",
        upsert: false,
      });

    console.log(data);

    if (error) {
      return new Response(JSON.stringify(error), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
