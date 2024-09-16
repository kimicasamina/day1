import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BiSolidPlusSquare } from "react-icons/bi";

const categoryOptions = ["Health", "Career", "Productivity"];

export default function CreateHabit() {
  const onSubmit = () => {
    console.log("Submit new habit: ");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="leading-tight">
          ADD NEW HABIT
          <BiSolidPlusSquare className="w-[28px] h-full ml-2" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-primary-content text-2xl">
              Create a new Habit
            </h2>
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-y-4 ">
              <div className="form-control flex flex-col gap-y-2">
                <Label htmlFor="username" className="text-left ">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  // defaultValue="@peduarte"
                  className="col-span-3 input"
                />
              </div>
              <div className="form-control flex flex-col gap-y-2">
                <Label htmlFor="username" className="text-left ">
                  Description
                </Label>
                <Input
                  id="description"
                  name="description"
                  // defaultValue="@peduarte"
                  className="col-span-3 input"
                />
              </div>
              <div className="form-control flex-flex-col gap-y-2">
                <Label htmlFor="username" className="text-left ">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions.map((item) => (
                      <SelectItem value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
