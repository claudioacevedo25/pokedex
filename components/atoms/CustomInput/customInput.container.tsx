import { CustomInputComponent } from "./customInput.component"
import { CustomInputProps } from "./customInput.model"

export const CustomInputContainer = (props: CustomInputProps) => (
  <CustomInputComponent {...props} />
)
