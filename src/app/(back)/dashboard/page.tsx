import { SectionCards } from '@/components/section-cards'
import data from '../dashboard/data.json'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'


export default function DashboardPage() {
  return (
    <>
      <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
      <DataTable data={data} />
    </>
  )
}
