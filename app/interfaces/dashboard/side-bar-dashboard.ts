import { LucideIcon, LucideProps } from "lucide-react"
import { ForwardRefExoticComponent } from "react"

export interface SideBarDashboard  {
    name: string,
    route: string,
    icon: LucideIcon,
    children?: SideBarDashboard[]
}