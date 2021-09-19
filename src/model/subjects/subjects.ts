interface Subject {
    name: string,
    value: Subjectvalue
}

enum Subjectvalue {
    MAT = 'MAT',
    LEN = 'LEN',
    CCN = 'CCN',
    CCS = 'CCS',
    FIS = 'FIS',
    BIO = 'BIO',
    QMC = 'QMC'
}

const SUBJECTS: Subject[] = [
    {name: 'Matemáticas', value: Subjectvalue.MAT},
    {name: 'Lenguagje', value: Subjectvalue.LEN},
    {name: 'Ciencias Naturales', value: Subjectvalue.CCN},
    {name: 'Ciencias Sociales / Historia', value: Subjectvalue.CCS},
    {name: 'Física', value: Subjectvalue.FIS},
    {name: 'Biología', value: Subjectvalue.BIO},
    {name: 'Química', value: Subjectvalue.QMC},
]

export default SUBJECTS;