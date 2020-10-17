for a in `find . -name "*.php"`; do
    if grep -iq "?>\t<?php" $a; then
        sed -i "1s/.*/<?php/" $a
    fi
done
