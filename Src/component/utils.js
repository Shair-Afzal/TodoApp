import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexBetween: {
    justifyContent: 'space-between',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const initialValues = ()=>{ email:   ''; name: '';lastname: ''; password: ''; confirmPassword: '' }
export {initialValues}