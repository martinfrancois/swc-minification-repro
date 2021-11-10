import type { NextPage } from "next";
import {
  AutocompleteField,
  FormDialog,
  useEnhancedForm,
} from "@biomedit/next-widgets";
import { FormProvider } from "react-hook-form";
import React from "react";

const Home: NextPage = () => {
  // @ts-ignore
  const form = useEnhancedForm();

  const choices = [
    { key: 1, value: 1, label: "User 1" },
    { key: 2, value: 2, label: "User 2" },
  ];

  const flag = {
    user: 2,
  };

  return (
    <FormProvider {...form}>
      <FormDialog
        title={"New Flag"}
        open={true}
        onSubmit={() => console.log("Submit")}
        isSubmitting={false}
      >
        <AutocompleteField
          name="user"
          label={"User"}
          initialValues={flag}
          choices={choices}
        />
      </FormDialog>
    </FormProvider>
  );
};

export default Home;
