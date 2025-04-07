import React from 'react';
import * as S from './Table.styles';

type TableProps = {
  type: 'technical' | 'practical';
};

export const Table: React.FC<TableProps> = ({ type }) => {
  const rows =
    type === 'technical'
      ? [
          { id: 1, skill: 'JavaScript', experience: '1 year' },
          { id: 2, skill: 'TypeScript', experience: '1 year' },
          { id: 3, skill: 'React', experience: '1 year' },
          { id: 4, skill: 'Node.js / Express', experience: '1 year' },
          { id: 5, skill: 'Docker', experience: '1 year' },
          { id: 6, skill: 'VSCode / Git / Postman', experience: '1 year' },
          {
            id: 7,
            skill: 'Computer Building & Troubleshooting',
            experience: '10+ years',
          },
        ]
      : [
          { id: 1, skill: 'Managerial Experience', experience: '4 years' },
          { id: 2, skill: 'Business Owner', experience: '3 years' },
          { id: 3, skill: 'Photographer', experience: '8 years' },
          { id: 4, skill: 'Music Producer', experience: '8 years' },
          { id: 5, skill: 'DJ', experience: '9 years' },
          { id: 6, skill: 'Health & Safety Trained', experience: '5 years' },
          {
            id: 7,
            skill: 'Bilingual (German & English)',
            experience: 'Lifetime',
          },
        ];

  const headerColor = type === 'technical' ? '#007bff' : '#dc3545';

  return (
    <S.StyledTable>
      <thead style={{ backgroundColor: headerColor, color: 'white' }}>
        <S.StyledTableRow>
          <S.StyledTableCell>Skill</S.StyledTableCell>
          <S.StyledTableCell>Experience</S.StyledTableCell>
        </S.StyledTableRow>
      </thead>

      <tbody>
        {rows.map((row) => (
          <S.StyledTableRow key={row.id}>
            <S.StyledTableCell>{row.skill}</S.StyledTableCell>
            <S.StyledTableCell>{row.experience}</S.StyledTableCell>
          </S.StyledTableRow>
        ))}
      </tbody>
    </S.StyledTable>
  );
};
