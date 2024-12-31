// src/app/page.js
import Header from './components/Header';
import Footer from './components/Footer';
import Service9 from './components/Service9';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-center text-7xl font-bold my-10">آتی پیام</h1>
        <p className="text-center text-3xl py-2">مسیر رشد کسب و کار شما از اینجا آغاز میشود ، ارائه راهکار برای پیشرفت کسب و کار و تحول آن</p>
        <p className='text-center text-xl'>برای مشاوره رایگان با شماره ۰۲۱۸۸۷۱۷۴۵۱ تماس بگیرید و یا شماره همراه خود را ثبن کنید</p>
        <div className="flex justify-center gap-5 py-5">
          <input placeholder="شماره موبایل" className="w-48 text-center"></input>
          <button className=" bg-custom-yellowAti px-4 py-1 font-bold rounded-md">مشاوره رایگان</button>
        </div>
      </main>
      <Service9 />
     
      <Footer />
    </div>
  );
}
