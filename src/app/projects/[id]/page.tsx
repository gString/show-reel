import TopBar from "@/app/ui/projects/TopBar";
import Frame from "@/app/ui/projects/Frame";
import { Footer } from "@/app/ui/projects/Footer";
import { fetchIds, fetchProjectInfo } from "@/app/lib/data";


export async function generateStaticParams() {
  const ids = await fetchIds();
  return ids.map(id => ({ id }));
}

export default async function Page({params}: {
  params : { id: string }
}) {
  const {id} = params;
  const info = await fetchProjectInfo(id);

  return (
    params && <div className="pageLayout">
      <TopBar info={info} />
      <Frame link={info.link} />
      <Footer info={info} />
    </div>
  )
}