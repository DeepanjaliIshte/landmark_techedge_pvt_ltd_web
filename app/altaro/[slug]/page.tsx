import ClientPage from "./ClientPage";

export function generateStaticParams() {
  return [
    { slug: "vm-backup" },
    { slug: "microsoft-365-backup" },
    { slug: "windows-server-backup" },
    { slug: "file-server-backup" },
    { slug: "home-pc-backup" },
  ];
}

export default async function AltaroSubPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  return <ClientPage slug={slug} />;
}
