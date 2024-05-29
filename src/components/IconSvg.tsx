import Icon from '../assets/icons.svg';

export type IconProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    color?: any,
    size?: string | number,
    icon: string | number,
}

const IconSvg: React.FC<IconProps> = ({icon, color = 'black', size = 30}) => (
   <svg className="svg-icon" stroke={color} width={size} height={size}>
       <use href={`${Icon}#d-${icon}`} />
   </svg>
);

export default IconSvg;