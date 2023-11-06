import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#bfa75e"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#bfa75e"
    }
  }
})(TextField);

export function Form({ content, setcontent }) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setcontent([
      ...content,
      {
        ...data,
        ingredients: data.ingredients.split(","),
        id: content.length + 1,
        cardFlag: true
      }
    ]);
    reset();
  };

  return (
    <section className="form">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Controller
            name="title"
            control={control}
            rules={{ required: "Field should be filled" }}
            render={({ field }) => (
              <CustomTextField
                className="text-field"
                label="Enter the Title"
                error={errors.title}
                helperText={errors.title?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="img"
            control={control}
            rules={{ required: "Field should be filled" }}
            render={({ field }) => (
              <CustomTextField
                className="text-field"
                label="Enter the Image URL"
                error={errors.img}
                helperText={errors.img?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: "Field should be filled" }}
            render={({ field }) => (
              <CustomTextField
                className="text-field"
                multiline
                rows={2}
                label="Type in some Description"
                error={errors.description}
                helperText={errors.description?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="ingredients"
            control={control}
            rules={{ required: "Field should be filled" }}
            render={({ field }) => (
              <CustomTextField
                className="text-field"
                multiline
                rows={4}
                label="Type the list of Ingredients seperated by comma"
                error={errors.ingredients}
                helperText={errors.ingredients?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="procedure"
            control={control}
            rules={{ required: "Field should be filled" }}
            render={({ field }) => (
              <CustomTextField
                className="text-field"
                multiline
                rows={3}
                label="Type the procedure"
                error={errors.procedure}
                helperText={errors.procedure?.message}
                {...field}
              />
            )}
          />
          <Button className="btn" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
