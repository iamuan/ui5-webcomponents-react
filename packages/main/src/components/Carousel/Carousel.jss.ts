import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    touchAction: 'pan-y',
    minWidth: '15.5rem',
    fontFamily: parameters.sapUiFontFamily,
    backgroundColor: parameters.sapUiBaseBG,
    '&:focus': {
      outline: 'none',
      '&:before': {
        border: '1px solid #000000',
        position: 'absolute',
        content: '" "',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: '2',
        pointerEvents: 'none'
      },
      '&:after': {
        border: '1px dotted #ffffff',
        position: 'absolute',
        content: '" "',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: '2',
        pointerEvents: 'none'
      }
    }
  },
  carouselInner: {
    height: '100%',
    position: 'relative',
    whiteSpace: 'nowrap',
    textAlign: 'start',
    fontSize: '0',
    transition: 'transform 0.5s cubic-bezier(0.46, 0, 0.44, 1)'
  },
  carouselItem: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'top',
    whiteSpace: 'normal',
    fontSize: '1rem',
    visibility: 'hidden'
  },
  carouselArrowPlacementContent: {
    '&:hover': {
      '& [data-value="paginationArrow"]': {
        opacity: 1,
        '& ui5-icon': {
          transform: 'rotate(0deg)'
        }
      }
    },
    '& $carouselItem': {
      padding: '0 4rem',
      width: 'calc(100% - 8rem)'
    }
  }
});

export default styles;
