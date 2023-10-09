import Image from 'next/image';

export default function LoginLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <main>
      <section className="bg-[#2c66bb] dark:bg-[#2c66bb]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  {children}
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}