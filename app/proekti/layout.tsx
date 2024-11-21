import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Реализирани уеб проекти от Powweb.bg",
    template: "Реализирани уеб проекти от Powweb.bg",
  },
  description: "Открийте реализираните уеб проекти от Powweb.bg – вашият доверен партньор в уеб дизайна и разработката. Вдъхновете се от иновативни решения, модерни...",
  icons: {
    icon: "/new-favicon.ico",
  },
};
export default function Proekti({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="proekti flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}
