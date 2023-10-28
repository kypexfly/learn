import ServerComponentForm from "@/components/server-component-form";
import ClientComponentForm from "@/components/client-component-form";
import ClientComponentTransition from "@/components/client-component-transition";

export default function Home() {
  return (
    <main>
      <div className="flex gap-2">
        <ServerComponentForm />
        <ClientComponentForm />
        <ClientComponentTransition />
      </div>
    </main>
  );
}
