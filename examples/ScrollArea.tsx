import ScrollArea from '@/components/ScrollArea';

const ScrollAreaExample: React.FC = () => {
  return (
    <div className="p-4">
      <ScrollArea className="border border-gray-300 rounded-md p-2 w-80 h-64">
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla eu suscipit cursus, libero nisl facilisis est, at faucibus orci
            eros a mauris.
          </p>
          <p>
            Suspendisse potenti. Phasellus aliquam cursus turpis, ut congue nulla condimentum id. Cras vehicula metus eget leo volutpat vestibulum. Praesent nec
            erat in ligula dapibus volutpat a ac nulla.
          </p>
          <p>
            Aliquam erat volutpat. Nullam varius est sed lectus tincidunt, ac gravida eros ullamcorper. Nam laoreet mi et tincidunt pretium. Duis sagittis,
            ligula vel vulputate iaculis, magna lectus cursus risus, eget accumsan purus eros vel sem.
          </p>
          <p>
            Vestibulum luctus, lorem ut tincidunt gravida, turpis sem posuere libero, sed varius orci lacus sed libero. Curabitur ultrices dui at ante
            ullamcorper, at fermentum felis feugiat.
          </p>
          <p>
            Maecenas euismod velit in dignissim convallis. Integer sit amet lectus vitae sapien egestas malesuada. In hac habitasse platea dictumst. Nullam sit
            amet massa id felis commodo consectetur non ac sapien.
          </p>
          <p>
            Ut fringilla, tortor vel pharetra feugiat, libero ipsum fermentum odio, in sollicitudin nulla nunc vel risus. Sed mollis erat et turpis pretium
            varius. Nam venenatis nunc id est elementum laoreet.
          </p>
          <p>
            Suspendisse potenti. Aenean ut ligula urna. Donec imperdiet, lacus nec fermentum tincidunt, ligula urna egestas magna, vel tempus leo ligula ac
            nunc. Nulla facilisi.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ScrollAreaExample;
