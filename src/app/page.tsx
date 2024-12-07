import { Extract } from '@/components/organisms/extract/Extract';
import { MainHeader } from '@/components/organisms/main-header/MainHeader';
import { Nav } from '@/components/organisms/nav/Nav';

export default function Home() {
  return (
   <main className="h-full">
    <MainHeader />
    <div className="px-6 py-8 lg:px-36 lg:py-8 md:px-14 md:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Nav />
      <div>conteúdo</div>
      <Extract />
    </div>
   </main>
  )
}