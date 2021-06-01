import React from 'react'
import * as S from './styles'
import { TStatsProps, TStat } from './types'

const Stats = ({ items } : TStatsProps) => (
  <S.Stats>
    {items.map((item: TStat) => (
      <S.Stat>
        <S.Label>{item.label}</S.Label>
        <S.Value>{item.value}</S.Value>
        <S.Bar value={item.value} />
      </S.Stat>
    ))}
  </S.Stats>
)

export default Stats
