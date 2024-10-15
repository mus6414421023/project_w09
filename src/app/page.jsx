import Image from "next/image";

export default function Home() {
  return (
    <section class="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      <div class="container p-6 mx-auto space-y-8">
        <div class="space-y-2 text-center">
          <h2 class="text-3xl font-bold">alicepimap 6424421027</h2>
          <p class="font-serif text-sm dark:text-gray-600">
          Work w09 create page on Next js
          </p>
        </div>
        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article class="flex flex-col dark:bg-gray-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image 
              src="https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_1280.jpg"
              class="object-cover w-full h-52 dark:bg-gray-500"
              width={400}
              height={150}
              />
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
              >
                Convenire
              </a>
              <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article class="flex flex-col dark:bg-gray-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
              src="https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781_1280.jpg"
              class="object-cover w-full h-52 dark:bg-gray-500"
              width={400}
              height={150}
              />
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
              >
                Convenire
              </a>
              <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article class="flex flex-col dark:bg-gray-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
              src="https://cdn.pixabay.com/photo/2019/07/20/20/11/nature-4351455_1280.jpg"
              class="object-cover w-full h-52 dark:bg-gray-500"
              width={400}
              height={150}
              />
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
              >
                Convenire
              </a>
              <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 3, 2020</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article class="flex flex-col dark:bg-gray-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
              src="https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_1280.jpg"
              class="object-cover w-full h-52 dark:bg-gray-500"
              width={400}
              height={150}
              />
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
              >
                Convenire
              </a>
              <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 4, 2020</span>
                <span>2.4K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
