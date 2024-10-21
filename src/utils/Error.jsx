import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";

function Error() {
  const { extras } = useContext(LanguageContext);

  return (
    <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            Error 404
          </h2>
          <p class="text-2xl md:text-3xl dark:text-gray-300">{extras.Error[0]}</p>
          <a href="/" class="px-8 py-4 text-xl font-semibold rounded bg-purple-700 text-gray-50 hover:text-gray-200">{extras.Error[1]}</a>
        </div>
      </div>
    </section>
  )
}
export default Error