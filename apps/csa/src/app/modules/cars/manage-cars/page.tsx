'use client'

import { Box } from '@chakra-ui/react'
import { BaseText, BoxContainer } from '_components/custom'
import React, { useState } from 'react'

const ManageCarsPage = () => {
  const [isFilterActive, setIsFilterActive] = useState(false)

  return (
    <BoxContainer
      title={'Gestion des Voitures'}
      description={'Gerer votre flotte de vehicules'}
      withActionButtons
      onToggleFilter={() => setIsFilterActive((prev) => !prev)}
      isFilterActive={isFilterActive}
      actionsButtonProps={{
        validateTitle: 'Ajouter une voiture',
        validateColor: 'primary',
      }}
      filterComponent={
        <Box>
          <BaseText>Salem</BaseText>
        </Box>
      }
    >
      <Box mt={'30px'}>
        <BaseText>Salem</BaseText>
      </Box>
    </BoxContainer>
  )
}

export default ManageCarsPage
