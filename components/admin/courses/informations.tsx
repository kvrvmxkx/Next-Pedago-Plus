import React, { forwardRef, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { informationsSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


interface Props {
  informationsData: {
    title: string | undefined;
    price: string | undefined;
    category: string | undefined;
    description: string | undefined
  };
  setInformationsData: React.Dispatch<React.SetStateAction<object>>;
  setInformationsFormIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const Information = forwardRef<HTMLButtonElement, Props>(
  ({ informationsData, setInformationsData, setInformationsFormIsValid }, ref) => {

   const form = useForm<z.infer<typeof informationsSchema>>({
    resolver: zodResolver(informationsSchema),
    defaultValues: informationsData
  });

  useEffect(() => {
    setInformationsFormIsValid(form.formState.isValid)
  },[form.formState.isValid, setInformationsFormIsValid])

  const handleSubmit = async (values: z.infer<typeof informationsSchema>) => {
    setInformationsData(values)
  };


  return (
    <div className="flex flex-col justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {["title", "category", "description", "price"].map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof z.infer<typeof informationsSchema>}
              render={({ field: fieldProps }) => (
                <FormItem className="mb-1">
                  <div className="w-full flex gap-2">
                    <FormLabel className="w-30 flex items-center justify-end font-medium text-sm">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-md focus-visible:ring-0 focus-visible:border-primary px-4 py-5"
                        placeholder={`Enter your ${field}`}
                        {...fieldProps}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="ml-30" />
                </FormItem>
              )}
            />
          ))}
          <button ref={ref} type="submit" className="ml-30 hidden">Submit</button>
        </form>
      </Form>
    </div>
  );
});

Information.displayName = "Information";

export default Information;
