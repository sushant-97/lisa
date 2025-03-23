import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Briefcase, Calendar, CheckCircle, Clock } from "lucide-react"

export function ApplicationStats() {
  return (
    <>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-bold">Total Applications</CardTitle>
          <Briefcase className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">63</div>
          <p className="text-xs font-medium text-green-600 dark:text-green-500">+12% from last month</p>
        </CardContent>
      </Card>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-bold">Active Applications</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45</div>
          <p className="text-xs font-medium text-green-600 dark:text-green-500">+5% from last month</p>
        </CardContent>
      </Card>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-bold">Interviews</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8</div>
          <div className="flex items-center gap-1">
            <ArrowUpRight className="h-3 w-3 text-green-600 dark:text-green-500" />
            <p className="text-xs font-medium">3 upcoming</p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-bold">Success Rate</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18%</div>
          <p className="text-xs font-medium text-green-600 dark:text-green-500">+2% from last month</p>
        </CardContent>
      </Card>
    </>
  )
}