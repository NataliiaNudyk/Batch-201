import { Font, StyleSheet } from '@react-pdf/renderer';
import TahomaTTF from '../../../public/fonts/Tahoma.ttf'
import TahomaBD from '../../../public/fonts/TahomaBD.ttf'


Font.register({
  family: 'Tahoma',
   fonts: [
    { src: TahomaTTF, fontWeight: 'normal' },
    { src: TahomaBD, fontWeight: 'bold' },
  ],
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    fontFamily: 'Tahoma',
    margin: '30 20'
  },
  section: {
    margin: 20,
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleSection: {
    color: '#b6a47b',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 100
  },
  image: {
    width: 300,
    height: 450,
    objectFit: 'contain',
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 8,
  },
  mainContent: {
    flexDirection: 'row',
    gap: 40,

  },
  labels: {
    fontSize: 10,
    marginBottom: 8,
    gap: 4
  },
  label: {
    color: '#beaa8a',
  },
  item: {
    color: '#7a160c'
  },
  block: {
    marginTop: 50,
  },
  descriptionSection: {
    width: 550
    
  },
  descriptionTitleBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 8,
    color: '#8f7239',
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase'
  },
  description: {
    fontSize: 8,
    lineHeight: 2.5,
    color: '#7a160c',
  },
   line: {
    width: 40,
    height: 1,
    backgroundColor: '#8f7239', 
    marginHorizontal: 5,
  },
});
