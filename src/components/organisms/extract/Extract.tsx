import { ButtonIcon } from '@/components/atoms/buttonIcon/ButtonIcon';
import { ExtractItem } from '@/components/atoms/extractItem/ExtractItem';
import { EditIcon } from '@/components/icons/EditIcon';
import { TrashIcon } from '@/components/icons/TrashIcon';

export function Extract() {
  return (
    <div
      className="
        bg-gray-200 
        w-full
        rounded-lg
        py-6
        px-6
        lg:w-[250px]
      "
    >                
      <div className='flex justify-between items-center pb-4'>
        <h1 className='text-h1 font-bold'>Extrato</h1>
        <div className='flex gap-2'>
          <ButtonIcon icon={EditIcon} />
          <ButtonIcon icon={TrashIcon} />
        </div>
      </div>
      <div className=''>
        <ExtractItem />
      </div>
    </div>
  )
}
