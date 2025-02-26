
followed this url..
https://www.youtube.com/watch?v=jaMWi9yEkyI


UseMemo		
	what is useMemo	In React Native, useMemo is a React Hook that helps optimize performance by memoizing the result of an expensive calculation so that it is not recalculated on every render.
	"Purpose and Use Cases
"	"Optimizing Expensive Calculations
If a calculation is resource-intensive, useMemo ensures it is not repeated on every render unnecessarily.
1.In programming, ""expensive"" refers to operations that require significant computational resources such as CPU processing, memory, or time. These operations can slow down an application if they are repeated unnecessarily.

Filtering and Sorting Data Efficiently
Helps optimize data filtering operations by recalculating only when the data changes.
Reducing Unnecessary Re-renders
Works well with React.memo to prevent re-rendering child components unless necessary."
		
	When to Avoid useMemo	"If the calculation is not expensive (simple arithmetic, string manipulations, etc.).
When the component does not re-render frequently.
Overusing useMemo can increase memory consumption without significant benefits"
		