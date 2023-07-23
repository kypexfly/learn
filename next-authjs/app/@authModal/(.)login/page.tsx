import Login from "@/app/(auth)/login/page";
import CloseModal from "@/components/close-modal";

export default function LoginModal() {
  return (
    <div className="fixed inset-0 bg-zinc-900/50 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-slate-700/25 w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>

          <Login />
        </div>
      </div>
    </div>
  );
}
