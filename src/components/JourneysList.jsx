import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import CountryCard from '../components/CountryCard'

const selectedTabStyle = {
  _selected: { color: 'purple', borderBottom: '1px solid', borderColor: 'purple' }
}

export default function JourneysList (props) {
  const navigate = useNavigate()
  const journeys = props.journeys

  const openJourneys = journeys.filter(journey => journey.finalized === 'N')
  const finalizedJourneys = journeys.filter(journey => journey.finalized === 'Y')

  return (
    <Tabs w='100%'>
      <TabList>
        <Tab sx={selectedTabStyle}>
          Iniciadas
        </Tab>
        {finalizedJourneys.length > 0 &&
          <Tab sx={selectedTabStyle}>Finalizadas</Tab>
          }
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
        {openJourneys.map((journey) => {
          return <CountryCard
                  key={journey.journeyId}
                  src={journey.country.image}
                  name={journey.country.name}
                  percentage={journey.metRequirementPercentage}
                  onClick={() => navigate(`/journey/${journey.country.id}`)}
                  circular={true}
                />
        })}
        </TabPanel>
        {finalizedJourneys.length > 0 &&
          <TabPanel px={0}>
            {finalizedJourneys.map((journey) => {
              return <CountryCard
                      key={journey.journeyId}
                      src={journey.country.image}
                      name={journey.country.name}
                      percentage={journey.metRequirementPercentage}
                      onClick={() => navigate(`/journey/${journey.country.id}`)}
                      circular={true}
                    />
            })}
          </TabPanel>
        }
      </TabPanels>
    </Tabs>
  )
}
