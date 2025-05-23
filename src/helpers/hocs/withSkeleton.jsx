import Skeleton from "../../component/skeleton/Skeleton";

function withSkeleton(Component) {
  return function WithSkeletonWrapper(props) {
    const {
      isLoading,
      type = "item",
      count = 10,
      direction = "column",
      ...restProps
    } = props;

    if (isLoading) {
      return <Skeleton type={type} count={+count} direction={direction} />;
    }

    return <Component type={type} {...restProps} />;
  };
}

export default withSkeleton;