"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/hooks";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { setList } from "@/lib/redux-toolkit/features/addToListSlice";
import { useToast } from "../ui/use-toast";
import { WatchAndReadList } from "./WatchAndReadList";

export default function AddToList({ info, id }) {
  const dispatch = useAppDispatch();
  const lists = useAppSelector(state => state.lists.value);
  const { toast } = useToast();

  const isAlreadyInTheList = lists.some(list => list.id === id);

  function handleAddToList() {
    if (!lists.some(list => list.id === info.id)) {
      dispatch(
        setList([
          ...lists,
          {
            id,
            title: info.title,
            image: info.image ? info.image : info.thumbnail,
            type: info.type,
          },
        ])
      );
      toast({
        title: `Added to ${info.chapters ? "Readlist" : "Watchlist"}`,
      });
    }
  }

  return (
    <>
      {isAlreadyInTheList ? (
        <WatchAndReadList />
      ) : (
        <Button
          onClick={handleAddToList}
          variant="outline"
          className="text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all customSm:w-full md:w-auto"
        >
          <FaPlus className="mr-1" />
          {info.chapters ? "Add to Readlist" : "Add to Watchlist"}
        </Button>
      )}
    </>
  );
}
