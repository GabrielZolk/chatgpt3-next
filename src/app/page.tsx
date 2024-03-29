export default function Home() {
  return (
    <main className='relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1'>
      <div className='flex-1 overflow-hidden'>
        <div className='h-full dark:bg-gray-800'>
          <div className='flex flex-col items-center text-sm h-full dark:bg-gray-800'>
            <div className='text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex-col px-6 dark:text-gray-100'>
              <h1 className='text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center'>
                Zolk GPT 🍷🗿
              </h1>
              <div className='md:flex items-start text-center gap-3.5'>
                <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
                  <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
                    <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    Ideias 💡
                  </h2>
                  <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                    <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"Como ficar bom no Counter-Strike?" 🔫 →</button>
                    <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"Por que a Katarina é o melhor campeão do LoL?" ⚔💃 →</button>
                    <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"Como produzir um Slap House no FL Studio" 🎵 →</button>
                  </ul>
                </div>
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                  <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
                    Capacidades ☀
                  </h2>
                  <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Se lembra do contexto conversado com o usuário ✅</li>
                    <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Permite ao usuário fornecer correções de acompanhamento ✅</li>
                    <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Treinado para recusar requisições impróprias 😎</li>
                  </ul>
                </div>
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                  <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                    <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Limitações 💀
                  </h2>
                  <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Pode ocasionalmente gerar informações incorretas ☹</li>
                    <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Pode ocasionalmente produzir instruções prejudiciais ou conteúdo tendencioso ⚠</li><li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                      Conhecimento limitado depois de 2021 ❌</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2'>
        <form className='stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
          <div className='relative flex h-full flex-1 md:flex-col'>
            <div className='flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center'></div>
            <div className='flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'>
              <input className='m-0 w-full outline-none resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0' type='text'>
              </input>
              <button className='absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40'>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
        </form>
        <div className='px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6'>
          <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" className="underline">
            ChatGPT Mar 23 Version
          </a>
          . Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts
        </div>

      </div>
    </main>
  )
}
