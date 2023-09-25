
const dataDefault = {
  
}

export default function HeroUm ({title, buttonTitle, headline, button, buttonExtra, description}) {
  


  return (
    <div className="bg-slate-100">

      <div className="relative isolate px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-44">
          <div className=" mb-8 flex items-center center content-center justify-center">
            {
              title 
              ?
              <div className="relative rounded-full px-3 text-center py-1 w-fit text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {title}
                {
                  buttonTitle 
                  ?
                  <a href="#" className="font-semibold text-indigo-600 hidden md:inline-block ">
                    {buttonTitle} <span aria-hidden="true">&rarr;</span>
                  </a>
                  :
                  <></>
                }
              </div>
              :
              <></>
            }
            
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
            <div className="mt-10 block items-center justify-center flex-1 gap-x-6">
              <a
                href="#"
                className="rounded-md uppercase bg-indigo-600 block md:inline-block px-3.5 md:px-16 py-2.5 border-slate-400 md:border-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {button}
              </a>
              {
                buttonExtra 
                ?
                <a href="#" className="inline-block uppercase font-semibold border-slate-400 rounded-md md:ml-6 md:border-2 leading-6 text-gray-900 px-3.5 md:px-16 py-2 text-sm">
                  {buttonExtra} <span aria-hidden="true">→</span>
                </a>
                :
                <></>
              }
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
