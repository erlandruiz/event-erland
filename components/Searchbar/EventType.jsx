import { BiLayer } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";

const EventType = () => {
  const { events, selectedType, setSelectedType } = useContext(EventContext);

  const uniqueTypes = [
    "Todos Los Géneros",
    ...new Set(events.map((event) => event.type)),
  ];

  return (
    <div className="flex items-center gap-[10px] w-full xl:w-[190px] select-none">
      {/**Icon */}
      <div className="text-log textaccent">
        <BiLayer />
      </div>
      <Select
        value={selectedType ?? null}
        onValueChange={(value) => setSelectedType(value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0 capitalize">
          <SelectValue placeholder="Género" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Género</SelectLabel>
            {uniqueTypes.map((uniqueType, index) => {
              return (
                <SelectItem
                  value={uniqueType === "Todos Los Géneros" ? null : uniqueType}
                  key={index}
                  className="capitalize"
                >
                  {uniqueType}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventType;
