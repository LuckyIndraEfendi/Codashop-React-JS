import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { useRootLayout } from "@/contexts/RootContextProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserPlayInput = ({ item }: any, i: number) => {
  const { userDataInput, handleInputChange } = useRootLayout();
  return (
    <div className="flex gap-2 w-full" id={`${i}_input`}>
      <Input
        className={cn(
          " border-[1.5px] h-12  w-full font-medium text-zinc-900 font-inter md:w-full border-gray-300 placeholder:font-inter placeholder:font-medium placeholder:text-sm focus-visible:outline-none focus-visible:ring-blue-500 focus:border-none "
        )}
        placeholder={item?.input_placeholder}
        onChange={handleInputChange}
        name="userId"
        value={userDataInput?.userId}
      />
      {item?.player_example_banner && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <img
                src="/assets/question.png"
                alt=""
                width={20}
                height={20}
                className="hover:cursor-pointer"
              />
            </TooltipTrigger>
            <TooltipContent className={cn("p-0 rounded-lg")} side="bottom">
              <img src={item?.player_example_banner} alt="" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default UserPlayInput;
