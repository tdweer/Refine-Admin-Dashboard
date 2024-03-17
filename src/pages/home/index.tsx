import { UpcomingEvents, DashboardTotalCountCard } from '@/components'
import { DASHBOARD_TOTAL_COUNTS_QUERY } from '@/graphql/queries'
import { Row, Col } from 'antd'
import { useCustom } from '@refinedev/core'
import { DashboardTotalCountsQuery } from '@/graphql/types'





export const Home = () => {

  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: '',
    method: 'get',
    meta: {
       gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY
    }
  })

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard 
          resource="companies"
          isLoading={isLoading}
          totalCount={data?.data.companies.totalCount || 0} // Provide a default value of 0
          />
        </Col>
        {/* <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="deals"
            isLoading={isLoading}
            totalCount={data?.data.deals.totalCount || 0} // Provide a default value of 0
          />
        </Col> */}
      </Row>
      <Row
        gutter={[32, 32]}
        style={{
          marginTop: '32px'
        }}
      >
        <Col xs={24} sm={24} xl={8}
          style={{
            height: '460px'
          }}
        >
          <UpcomingEvents />
        </Col>
      </Row>
    </div>
  )
}

