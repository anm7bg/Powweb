import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Услуги - Powweb.bg",
    template: "Услуги - Powweb.bg",
  },
  description: "Услуги предлагани от Powweb.bg",
  icons: {
    icon: "/new-favicon.ico",
  },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}
