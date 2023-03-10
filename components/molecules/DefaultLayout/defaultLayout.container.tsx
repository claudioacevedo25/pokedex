import { DefaultLayoutComponent } from "./defaultLayout.component"
import { DefaultLayoutProps } from "./defaultLayout.model"

export const DefaultLayoutContainer = (props: DefaultLayoutProps) => (
  <DefaultLayoutComponent {...props} />
)
