import { bankOfAzerothData } from './bank-of-azeroth';
import { middleEarthBankData } from './middle-earth-bank';
import { nabooBankData } from './naboo-bank';

export default function (lenderName: string | string[] | undefined) {
  const lenders: any = {
    'bank-of-azeroth': bankOfAzerothData,
    'middle-earth-bank': middleEarthBankData,
    'naboo-bank': nabooBankData,
  };
  if (typeof lenderName === 'string' && lenders[lenderName]) {
    return lenders[lenderName];
  }
  return undefined;
}
