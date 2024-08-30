import './App.css'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

function App() {
  return (
    <div >
      <Popover>
        <PopoverTrigger className='text-[28px] font-[500] bg-slate-300 rounded-md p-3 capitalize'>hello</PopoverTrigger>
        <PopoverContent>
           <h1 className='capitalize'>electron template</h1>
           <h3>electron , react , vite , tailwind , typescript , shadcn/ui</h3>
        </PopoverContent>
      </Popover>

    </div>
  );
}

export default App
